<tr className="column-divider">
              {/* To Do - Regular Service */}
              <DragDropContext onDropEnd={(result) => console.log(result)}>
                <Droppable droppableId="tasks">
                  {(provided) => (
                    <td
                      className="column-wall"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      (Expedited Service)
                      {tasks
                        .filter(
                    (task) =>
                      task.state === "To-Do" && task.service === "Regular"
                  )
                        .map((task, index) => {
                          return (
                            <Draggable
                              key={task._id}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="task"
                                >
                                  <Link
                                    className="no-underline"
                                    to={`/task/${task._id}`}
                                  >
                                    <div className={`${task.color} task-card`}>
                                      {task.name}
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </td>
                  )}
                </Droppable>
              </DragDropContext>
              
              {/* Do Today - Regular Service */}
              <DragDropContext onDropEnd={(result) => console.log(result)}>
                <Droppable droppableId="task">
                  {(provided) => (
                    <td
                      className="column-wall"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {tasks
                        .filter(
                    (task) =>
                      task.state === "Do Today" && task.service === "Regular"
                  )
                        .map((task, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  className="task"
                                >
                                  <Link
                                    className="no-underline"
                                    to={`/task/${task._id}`}
                                  >
                                    <div className={`${task.color} task-card`}>
                                      {task.name}
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </td>
                  )}
                </Droppable>
              </DragDropContext>

              {/* In Progress - Regular Service */}
              <DragDropContext onDropEnd={(result) => console.log(result)}>
                <Droppable droppableId="task">
                  {(provided) => (
                    <td
                      className="column-wall"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {tasks
                        .filter(
                    (task) =>
                      task.state === "In-Progress" && task.service === "Regular"
                  )

                        .map((task, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  className="task"
                                >
                                  <Link
                                    className="no-underline"
                                    to={`/task/${task._id}`}
                                  >
                                    <div className={`${task.color} task-card`}>
                                      {task.name}
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </td>
                  )}
                </Droppable>
              </DragDropContext>

              {/* Done - Regular Service */}
              <DragDropContext onDropEnd={(result) => console.log(result)}>
                <Droppable droppableId="task">
                  {(provided) => (
                    <td
                      className="column-wall"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {tasks
                        .filter(
                    (task) =>
                      task.state === "Done" && task.service === "Regular"
                  )
                        .map((task, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={task._id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  className="task"
                                >
                                  <Link
                                    className="no-underline"
                                    to={`/task/${task._id}`}
                                  >
                                    <div className={`${task.color} task-card`}>
                                      {task.name}
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </td>
                  )}
                </Droppable>
              </DragDropContext>
            </tr>