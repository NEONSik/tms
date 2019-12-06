package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.entity.User;
import com.netcracker.lazarev.tms.repository.UserRepository;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User get(Long id) {
        return userRepository.findById(id).get();
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public User update(User user, Long id) {
        user.setId(id);
        return userRepository.save(user);
    }

    public Page<User> findAll(Integer page, Integer size, String sort, String role) {
        if (page == null && size == null && sort == null) {
            if (role == null) {
                return new PageImpl<>(userRepository.findAll(), PageRequest.of(1, 1), 1);
            } else {
                return new PageImpl<>(userRepository.findByRole(role), PageRequest.of(1,1), 1);
            }
        } else {
            String[] params = sort.split(",");
            Pageable pageRequest;
            if (params[1].equals("asc")) {
                pageRequest = PageRequest.of(page, size);
            } else {
                pageRequest = PageRequest.of(page, size, Sort.by(params[0]).descending());
            }
            return userRepository.findAll(pageRequest);
        }
    }


    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }


}
