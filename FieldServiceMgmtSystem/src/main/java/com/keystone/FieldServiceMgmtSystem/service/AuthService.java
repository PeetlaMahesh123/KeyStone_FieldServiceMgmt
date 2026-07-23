package com.keystone.FieldServiceMgmtSystem.service;

import com.keystone.FieldServiceMgmtSystem.dto.AuthResponse;
import com.keystone.FieldServiceMgmtSystem.dto.LoginRequest;
import com.keystone.FieldServiceMgmtSystem.dto.RegisterRequest;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);

}