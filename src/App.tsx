import { Controlled } from "./Controlled";
import { UnControlled } from "./UnControlled";

function App() {
	return (
		<div style={{ display: "flex", gap: "50px" }}>
			<div>
				<span>制御コンポーネント</span>
				<Controlled />
			</div>
			<div>
				<span>非制御コンポーネント</span>
				<UnControlled />
			</div>
		</div>
	);
}

export default App;
