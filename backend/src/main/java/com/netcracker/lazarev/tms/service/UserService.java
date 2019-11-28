package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.entity.User;
import com.netcracker.lazarev.tms.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    public Page<User> findAll(int page, int size, String sort){
        String[] params = sort.split(",");
        Pageable pageRequest;
        if (params[1].equals("asc")) {
            pageRequest = PageRequest.of(page,size);
        } else {
            pageRequest = PageRequest.of(page, size, Sort.by(params[0]).descending());
        }
        return userRepository.findAll(pageRequest);
    }


    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
