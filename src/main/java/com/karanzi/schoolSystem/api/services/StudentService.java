package com.karanzi.schoolSystem.api.services;

import com.karanzi.schoolSystem.api.entity.Student;
import com.karanzi.schoolSystem.api.exceptions.UserNotFoundException;
import com.karanzi.schoolSystem.api.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public Student addStudent(Student student){
        return studentRepository.save(student);
    }

    public List<Student> findAllStudents(){
        return studentRepository.findAll();
    }

    public Student updateStudent(Student student){
        return studentRepository.save(student);
    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }

    public Student findStudentById(Long id){
        return studentRepository.findStudentById(id)
                .orElseThrow(()->new UserNotFoundException("Student by id "+ id +" was not found"));
    }
}
