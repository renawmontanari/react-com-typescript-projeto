import React, { useState } from "react";

// Components
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList.tsx";

// CSS
import styles from "./App.module.css";

// Interface
import { ITesk } from "./interfaces/Task.ts";

function App() {
  const [taskList, setTaskList] = useState<ITesk[]>([]);

  return (
    <div>
      <div>
        <Header />
        <main className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm
              btnText="Criar Tarefa"
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
          <div>
            <h2>Suas tarefas:</h2>
            <TaskList />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
