test ('get only comleted courses', () => {
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Sold', isDone: false},
        {id:4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(el => el.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})