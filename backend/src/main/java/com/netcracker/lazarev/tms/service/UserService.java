package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.entity.User;
import com.netcracker.lazarev.tms.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User get(Long id) {
        return userRepository.findById(id).get();
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public User update(User user, Long id) {
        user.setId(id);
        return userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
