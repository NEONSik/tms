package com.netcracker.lazarev.tms.repository;

import com.netcracker.lazarev.tms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
