import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-account";

function Newaccountsheet() {
	const { isOpen, onClose } = useNewAccount();
	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className="space-y-4">
				<SheetHeader>
					<SheetTitle>New Account</SheetTitle>
					<SheetDescription>
						Create a new Account to track your transactions.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}

export { Newaccountsheet };
