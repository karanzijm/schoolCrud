--liquibase formatted sql

-- changeset author:schoolSystem:createStudentTable
CREATE TABLE `student` (
                           `id` bigint NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) DEFAULT NULL,
                           `surname` varchar(255) DEFAULT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- changeset author:schoolSystem:createTeacherTable

CREATE TABLE `teacher` (
                           `id` bigint NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) DEFAULT NULL,
                           `student_list` varchar(255) DEFAULT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- changeset author:schoolSystem:insertStartValues-studentTable
INSERT INTO student (id, name, surname) VALUES
                                            (1, 'Karanzi John Mary', 'Karanzi'),
                                            (2, 'Nakiberu Gloria', 'Nakiberu'),
                                            (3, 'Nakaweesa Gloria', 'Nakaweesa'),
                                            (5, 'roberto robert', 'roberts');

-- changeset author:schoolSystem:insertStartValues-teacherTable
INSERT INTO teacher (id, name, student_list) VALUES
                                                 (1, 'Farouk Semambya', 'Karanzi John Mary'),
                                                 (2, 'Samuel Kato', 'Karanzi John Mary,Nakiberu Gloria'),
                                                 (3, 'Micheal Kiiza', 'Karanzi John Mary,Nakiberu Gloria,Nakaweesa Gloria'),
                                                 (4, 'Harriet Nsamba', 'Nakaweesa Gloria,Nakiberu Gloria'),
                                                 (5, 'Julie Nakitende', 'Karanzi John Mary,Nakiberu Gloria');

