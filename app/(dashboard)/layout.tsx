import Header from "@/components/Header";
type Prop = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: Prop) => {
	return (
		<>
			<Header />
			<main className="px-3 lg:px-14">{children}</main>
		</>
	);
};
export default DashboardLayout;
