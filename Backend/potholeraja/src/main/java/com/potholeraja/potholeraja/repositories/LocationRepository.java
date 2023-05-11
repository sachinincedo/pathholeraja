package com.potholeraja.potholeraja.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.potholeraja.potholeraja.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {

}
