package com.karanzi.schoolSystem.api.services;

import com.karanzi.schoolSystem.api.entity.Teacher;
import com.karanzi.schoolSystem.api.exceptions.UserNotFoundException;
import com.karanzi.schoolSystem.api.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherService {
    private final TeacherRepository teacherRepository;

    public Teacher addTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher updateTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public List<Teacher> findAllTeachers(){
        return teacherRepository.findAll();
    }

    public void deleteTeacher(Long id){
        teacherRepository.deleteById(id);
    }

    public Teacher findTeacherById(Long id){
        return teacherRepository.findById(id).
                orElseThrow(()->new UserNotFoundException("Teacher by id "+ id +" was not found"));
    }
}
