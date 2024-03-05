package com.deepakallcode.codesnippetmanager.repositories;

import com.deepakallcode.codesnippetmanager.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select * from user where email=")
    User checkByUsername(String email, String password);
}
