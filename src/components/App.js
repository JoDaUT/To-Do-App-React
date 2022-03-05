import { ModalProvider } from "../context/modal";
import { ToDoProvider } from "../context/toDo";
import { AppView } from "./AppView";
export default function App() {
	return (
		<ModalProvider>
			<ToDoProvider>
				<AppView></AppView>
			</ToDoProvider>
		</ModalProvider>
	);
}
