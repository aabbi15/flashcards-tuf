CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(255) NOT NULL,
    ques VARCHAR(255) NOT NULL,
    ans VARCHAR(255) NOT NULL
);


INSERT INTO cards (topic, ques, ans) VALUES
('Linked List', 'What is the time complexity for inserting an element at the end of a singly linked list?', 'O(n)'),
('Queue', 'What is the time complexity for enqueue and dequeue operations in a queue implemented with a linked list?', 'O(1)'),
('Stack', 'What is the time complexity for push and pop operations in a stack?', 'O(1)'),
('Queue', 'What is a key advantage of using a circular queue over a linear queue?', 'It efficiently utilizes space by connecting the end of the queue back to the start.'),
('Linked List', 'What is the time complexity for inserting an element in the middle of a doubly linked list?', 'O(n)'),
('Stack', 'Which data structure is used for evaluating expressions and performing function call management in compilers?', 'Stack'),
('Priority Queue', 'What is the time complexity for inserting an element in a priority queue implemented with a binary heap?', 'O(log n)'),
('Linked List', 'What is the primary advantage of a circular linked list over a singly linked list?', 'It allows easy traversal from the end back to the beginning.');
