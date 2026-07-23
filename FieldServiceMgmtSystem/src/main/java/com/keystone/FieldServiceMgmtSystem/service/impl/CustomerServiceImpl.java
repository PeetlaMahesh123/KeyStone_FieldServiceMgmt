package com.keystone.FieldServiceMgmtSystem.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keystone.FieldServiceMgmtSystem.dto.CustomerDTO;
import com.keystone.FieldServiceMgmtSystem.entity.Customer;
import com.keystone.FieldServiceMgmtSystem.exception.ResourceNotFoundException;
import com.keystone.FieldServiceMgmtSystem.repository.CustomerRepository;
import com.keystone.FieldServiceMgmtSystem.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public CustomerDTO createCustomer(CustomerDTO dto) {

        Customer customer = new Customer();

        customer.setCustomerCode(dto.getCustomerCode());
        customer.setCustomerName(dto.getCustomerName());
        customer.setEmail(dto.getEmail());
        customer.setPhone(dto.getPhone());
        customer.setCompany(dto.getCompany());
        customer.setAddress(dto.getAddress());
        customer.setCity(dto.getCity());
        customer.setState(dto.getState());
        customer.setPincode(dto.getPincode());
        customer.setActive(dto.getActive());

        Customer saved = customerRepository.save(customer);

        dto.setId(saved.getId());

        return dto;
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {

        return customerRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDTO getCustomerById(Long id) {

        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer Not Found"));

        return convertToDTO(customer);
    }

    @Override
    public CustomerDTO updateCustomer(Long id, CustomerDTO dto) {

        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer Not Found"));

        customer.setCustomerCode(dto.getCustomerCode());
        customer.setCustomerName(dto.getCustomerName());
        customer.setEmail(dto.getEmail());
        customer.setPhone(dto.getPhone());
        customer.setCompany(dto.getCompany());
        customer.setAddress(dto.getAddress());
        customer.setCity(dto.getCity());
        customer.setState(dto.getState());
        customer.setPincode(dto.getPincode());
        customer.setActive(dto.getActive());

        customerRepository.save(customer);

        dto.setId(customer.getId());

        return dto;
    }

    @Override
    public void deleteCustomer(Long id) {

        customerRepository.deleteById(id);

    }

    private CustomerDTO convertToDTO(Customer customer) {

        CustomerDTO dto = new CustomerDTO();

        dto.setId(customer.getId());
        dto.setCustomerCode(customer.getCustomerCode());
        dto.setCustomerName(customer.getCustomerName());
        dto.setEmail(customer.getEmail());
        dto.setPhone(customer.getPhone());
        dto.setCompany(customer.getCompany());
        dto.setAddress(customer.getAddress());
        dto.setCity(customer.getCity());
        dto.setState(customer.getState());
        dto.setPincode(customer.getPincode());
        dto.setActive(customer.getActive());

        return dto;
    }

}