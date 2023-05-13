package com.potholeraja.potholeraja.home;

import org.springframework.http.ResponseEntity;

public interface HomePageService {
     ResponseEntity<HomeResponce> getHomePageDetails(Long userId);
}
