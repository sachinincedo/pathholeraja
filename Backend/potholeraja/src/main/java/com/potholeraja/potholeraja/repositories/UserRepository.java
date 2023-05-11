package com.potholeraja.potholeraja.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.potholeraja.potholeraja.entities.UserEntity;
import com.potholeraja.potholeraja.login.LoginRequestData;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

	Optional<UserEntity> findByEmail(String email);

}
