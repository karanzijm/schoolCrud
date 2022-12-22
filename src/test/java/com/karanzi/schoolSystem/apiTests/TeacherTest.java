package com.karanzi.schoolSystem.apiTests;

import com.karanzi.schoolSystem.api.entity.Teacher;
import com.karanzi.schoolSystem.api.repository.TeacherRepository;
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
public class TeacherTest {

    @Autowired
    private TeacherRepository teacherRepository;

    @Test
    public void testCreateTeacher(){
        Teacher teacher = new Teacher("name", "surname");
        Teacher createdTeacher = teacherRepository.save(teacher);
        assertNotNull(createdTeacher);
    }

    @Test
    public void testFindTeacherById(){
        Long id = Long.valueOf(1);
        Teacher teacher = teacherRepository.findById(id).orElseThrow();

        assertThat(teacher.getId()).isEqualTo(id);

    }

    @Test
    public void testUpdateTeacher(){
        String teacherSurname = "James";
        Teacher teacher = new Teacher("Head master Kafumbe", teacherSurname);
        teacher.setId(3L);

        teacherRepository.save(teacher);

        Teacher updatedTeacher = teacherRepository.findById(3L).orElseThrow();
        assertThat(updatedTeacher.getSurname()).isEqualTo(teacherSurname);

    }

    @Test
    public void testListTeachers(){
        List<Teacher> teacherList = teacherRepository.findAll();

        assertTrue(teacherList.size() > 0);
    }

    @Test
    //@Rollback(false)
    public void testDeleteTeacher(){
        Long id = Long.valueOf(3);
        boolean existsBeforeDelete = teacherRepository.findById(id).isPresent();
        teacherRepository.deleteById(id);
        boolean existsAfterDelete = teacherRepository.findById(id).isPresent();

        assertTrue(existsBeforeDelete);
        assertFalse(existsAfterDelete);

    }
}
