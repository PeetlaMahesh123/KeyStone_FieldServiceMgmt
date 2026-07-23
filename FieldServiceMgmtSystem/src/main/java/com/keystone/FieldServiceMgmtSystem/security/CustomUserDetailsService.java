package com.keystone.FieldServiceMgmtSystem.security;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.entity.User;
import com.keystone.FieldServiceMgmtSystem.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().getRoleName())
                .build();
    }

}