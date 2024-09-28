-- Insert data into the `student` table
INSERT INTO student (id, name, surname) VALUES
                                            (1, 'Karanzi John Mary', 'Karanzi'),
                                            (2, 'Nakiberu Gloria', 'Nakiberu'),
                                            (3, 'Nakaweesa Gloria', 'Nakaweesa'),
                                            (5, 'roberto robert', 'roberts');

-- Insert data into the `teacher` table
INSERT INTO teacher (id, name, student_list) VALUES
                                                 (1, 'Farouk Semambya', 'Karanzi John Mary'),
                                                 (2, 'Samuel Kato', 'Karanzi John Mary,Nakiberu Gloria'),
                                                 (3, 'Micheal Kiiza', 'Karanzi John Mary,Nakiberu Gloria,Nakaweesa Gloria'),
                                                 (4, 'Harriet Nsamba', 'Nakaweesa Gloria,Nakiberu Gloria'),
                                                 (5, 'Julie Nakitende', 'Karanzi John Mary,Nakiberu Gloria');
