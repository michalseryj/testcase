describe('Retrieve Task List', () => {
  it('Should retrieve a list of tasks', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/tasks',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('Should add, update, delete a task, and verify deletion', () => {
    // Step 1: Create a new task
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/tasks',
      body: {
        text: 'test1',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const taskId = response.body.id;

      // Step 2: Update the task
      cy.request({
        method: 'POST', // Based on Swagger, task update uses POST
        url: `http://localhost:8080/tasks/${taskId}`,
        body: {
          text: 'test2',
        },
      }).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
        expect(updateResponse.body).to.have.property('text', 'test2');

        // Step 3: Delete the task
        cy.request({
          method: 'DELETE',
          url: `http://localhost:8080/tasks/${taskId}`,
        }).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200);

          // Step 4: Verify the task is no longer in the task list
          cy.request({
            method: 'GET',
            url: 'http://localhost:8080/tasks',
          }).then((getResponse) => {
            expect(getResponse.status).to.eq(200);
            expect(getResponse.body).to.be.an('array');

            // Extract all task IDs and ensure the deleted ID is not in the list
            const taskIds = getResponse.body.map(task => task.id);
            expect(taskIds).not.to.include(taskId);
          });
        });
      });
    });
  });
});
