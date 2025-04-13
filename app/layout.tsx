import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata = {
    title: "New York Times",
    description: "New York Times Best Seller explorer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
				<Navigation/>
				<div>
					{children}
				</div>
				
			</body>
        </html>
    );
}
