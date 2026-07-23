package com.keystone.FieldServiceMgmtSystem.service;

import java.util.List;

import com.keystone.FieldServiceMgmtSystem.dto.CustomerDTO;

public interface CustomerService {

    CustomerDTO createCustomer(CustomerDTO customerDTO);

    List<CustomerDTO> getAllCustomers();

    CustomerDTO getCustomerById(Long id);

    CustomerDTO updateCustomer(Long id, CustomerDTO customerDTO);

    void deleteCustomer(Long id);

}