package com.karanzi.schoolSystem.apiTests;

import com.karanzi.schoolSystem.api.entity.Student;
import com.karanzi.schoolSystem.api.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class StudentTest {

    @Autowired
    private StudentRepository studentRepository;

    @Test
    public void testCreateStudent(){
        Student student = new Student("name", "surname");
        Student createdStudent = studentRepository.save(student);
        assertNotNull(createdStudent);
    }

    @Test
    public void testFindStudentById(){
        Long id = Long.valueOf(2);
        Student student = studentRepository.findStudentById(id).orElseThrow();
        //assertThat(student.getId()).is
        assertThat(student.getId()).isEqualTo(id);

    }

    @Test
    public void testUpdateStudent(){
        String studentSurname = "James";
        Student student = new Student("Richard", studentSurname);
        student.setId(4L);

        studentRepository.save(student);

        Student updatedStudent = studentRepository.findStudentById(4L).orElseThrow();
        assertThat(updatedStudent.getSurname()).isEqualTo(studentSurname);

    }

    @Test
    public void testListStudents(){
        List<Student> studentList = studentRepository.findAll();
//        assertThat(studentList).size().isGreaterThan(0);
        assertTrue(studentList.size() > 0);
    }

    @Test
    //@Rollback(false)
    public void testDeleteStudent(){
        Long id = Long.valueOf(2);
        boolean existsBeforeDelete = studentRepository.findStudentById(id).isPresent();
        studentRepository.deleteById(id);
        boolean existsAfterDelete = studentRepository.findStudentById(id).isPresent();

        assertTrue(existsBeforeDelete);
        assertFalse(existsAfterDelete);

    }
}
