"use client";

import { useMutation } from "@tanstack/react-query";

import { SITE_ROUTES } from "@/routes/site-routes";

export function useModels() {
	return useMutation({
		mutationFn: async (payload: { manId: string }) => {
			const response = await fetch(
				`${SITE_ROUTES.base}/api/models?man_id=${payload.manId}`
			);
			return response.json();
		},
		onError: (error) => {
			console.error("Error while fetching models", error);
		},
	});
}
