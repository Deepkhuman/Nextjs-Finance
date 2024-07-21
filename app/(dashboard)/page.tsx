import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<p>This is Auth Route tag</p>
			<UserButton></UserButton>
		</div>
	);
}
