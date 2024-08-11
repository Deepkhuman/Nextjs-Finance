"use client";

import { Newaccountsheet } from "@/features/accounnts/components/new-account-sheet";
import { useMountedState } from "react-use";
function SheetProvider() {
	const ismounted = useMountedState();
	if (!ismounted) return null;
	return (
		<>
			<Newaccountsheet />
		</>
	);
}

export { SheetProvider };
