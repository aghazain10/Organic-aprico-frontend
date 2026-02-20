// stores/cart.ts
import { defineStore } from "pinia";
import type { Product } from "~/types/product";

interface CartItem extends Product {
    quantity: number;
}

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [] as CartItem[],
    }),

    getters: {
        // Arrow function → receives state explicitly → no 'this' → safest for TS
        totalItems: (state): number =>
            state.items.reduce((sum, item) => sum + item.quantity, 0),

        // Same here — no dependency on other getters
        subtotal: (state): number =>
            state.items.reduce(
                (sum, item) => sum + (item.price ?? 0) * item.quantity,
                0,
            ),

        // Regular function → can safely use 'this' → must have explicit return type
        total(state): number {
            const taxRate = 0.1;
            return this.subtotal * (1 + taxRate);
        },
    },
    actions: {
        addItem(product: Product) {
            const existing = this.items.find((item) => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },

        removeItem(id: string) {
            this.items = this.items.filter((item) => item.id !== id);
        },

        updateQuantity(id: string, quantity: number) {
            const item = this.items.find((item) => item.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },

        clearCart() {
            this.items = [];
        },
    },

    // Now valid after adding the nuxt module
    persist: true, // ← simplest: persist everything to localStorage
    // Or more control:
    // persist: {
    //   storage: localStorage,   // or 'sessionStorage'
    //   paths: ['items'],        // only persist items, not getters
    // },
});
