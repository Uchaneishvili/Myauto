"use client";

import { useMutation } from "@tanstack/react-query";

import { SITE_ROUTES } from "@/routes/site-routes";

export function useManufacturers() {
	return useMutation({
		mutationFn: async () => {
			const response = await fetch(`${SITE_ROUTES.base}/api/manufacturers`);
			return response.json();
		},
		onError: (error) => {
			console.error("Error while fetching manufacturers", error);
		},
	});
}
