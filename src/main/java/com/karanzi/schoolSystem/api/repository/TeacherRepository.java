package com.karanzi.schoolSystem.api.repository;

import com.karanzi.schoolSystem.api.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
