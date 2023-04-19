import GenButton from "@/components/gen/button";
const Apply: React.FC = () => {
	return (
		<section id="apply">
			<h2>
				Time to join a community of creators, <br />
				programmers and innovators
			</h2>
			<GenButton
				props={{
					label: "Become a Member",
					onClick: () => console.log("Become a Member"),
					className: `btnPurple`,
				}}
			>
				Become a Member
			</GenButton>
		</section>
	);
};

export default Apply;
