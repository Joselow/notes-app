import { useAuthStore } from "@/stores/AuthStore";
import { type RouteLocationNormalized } from 'vue-router';


export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    const store = useAuthStore();    
    const isAuthenticated = store.authToken;

    const requiresAuth = to.meta.needAuth;
    if (requiresAuth && !isAuthenticated) {
        return { name: 'login' };
    } 
}
