package com.keystone.FieldServiceMgmtSystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.keystone.FieldServiceMgmtSystem.dto.CustomerDTO;
import com.keystone.FieldServiceMgmtSystem.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public CustomerDTO createCustomer(@RequestBody CustomerDTO dto) {

        return customerService.createCustomer(dto);

    }

    @GetMapping
    public List<CustomerDTO> getAllCustomers() {

        return customerService.getAllCustomers();

    }

    @GetMapping("/{id}")
    public CustomerDTO getCustomerById(@PathVariable Long id) {

        return customerService.getCustomerById(id);

    }

    @PutMapping("/{id}")
    public CustomerDTO updateCustomer(
            @PathVariable Long id,
            @RequestBody CustomerDTO dto) {

        return customerService.updateCustomer(id, dto);

    }

    @DeleteMapping("/{id}")
    public String deleteCustomer(@PathVariable Long id) {

        customerService.deleteCustomer(id);

        return "Customer Deleted Successfully";

    }

}