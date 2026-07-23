package com.keystone.FieldServiceMgmtSystem.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.AuthResponse;
import com.keystone.FieldServiceMgmtSystem.dto.LoginRequest;
import com.keystone.FieldServiceMgmtSystem.dto.RegisterRequest;
import com.keystone.FieldServiceMgmtSystem.entity.Role;
import com.keystone.FieldServiceMgmtSystem.entity.User;
import com.keystone.FieldServiceMgmtSystem.exception.BadRequestException;
import com.keystone.FieldServiceMgmtSystem.exception.ResourceNotFoundException;
import com.keystone.FieldServiceMgmtSystem.repository.RoleRepository;
import com.keystone.FieldServiceMgmtSystem.repository.UserRepository;
import com.keystone.FieldServiceMgmtSystem.security.JwtService;
import com.keystone.FieldServiceMgmtSystem.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthServiceImpl(
            UserRepository userRepository,
            RoleRepository roleRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Override
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email already exists");
        }

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new BadRequestException("Username already exists");
        }

        if (userRepository.existsByEmployeeId(request.getEmployeeId())) {
            throw new BadRequestException("Employee ID already exists");
        }

        if (userRepository.existsByPhone(request.getPhone())) {
            throw new BadRequestException("Phone Number already exists");
        }

        Role role = roleRepository
                .findByRoleName(request.getRoleName().toUpperCase())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Role Not Found"));

        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setUsername(request.getUsername());
        user.setEmployeeId(request.getEmployeeId());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setDepartment(request.getDepartment());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setActive(true);
        user.setRole(role);

        userRepository.save(user);

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(
                token,
                "User Registered Successfully"
        );
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new BadRequestException("Invalid Email"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new BadRequestException("Invalid Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(
                token,
                "Login Successful"
        );
    }

}