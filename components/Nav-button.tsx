import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
	href: string;
	label: string;
	isActive?: boolean;
};

function NavButton({ href, label, isActive }: Props) {
	return (
		<>
			<Button
				variant="outline"
				asChild
				size="sm"
				className={cn(
					"w-full lg:w-auto font-normal hover:bg-white/20 justify-between focus-visible:ring-offset-0 hover:text-white border-none focus-visible:ring-offset-transparent outline-none text-white focus:bg-white/30 transition",
					isActive ? "bg-white/10 text-white" : "bg-transparent"
				)}
			>
				<Link href={href}>{label}</Link>
			</Button>
		</>
	);
}

export default NavButton;
