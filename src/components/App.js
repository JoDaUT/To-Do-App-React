import { ToDoProvider } from "../context/toDo";
import { AppView } from "./AppView";
export default function App() {
	return (
		<ToDoProvider>
			<AppView></AppView>
		</ToDoProvider>
	);
}
