package com.netcracker.lazarev.tms.repository;

import com.netcracker.lazarev.tms.entity.User;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
@Query(value = "SELECT* FROM USERS WHERE ROLE!='Admin'",nativeQuery = true)
List<User> findAll();
List<User> findByRole(String role);
}
