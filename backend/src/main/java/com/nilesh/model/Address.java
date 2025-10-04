package com.nilesh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Address {

    @Id @GeneratedValue(strategy = jakarta.persistence.GenerationType.AUTO)
    private Long id;
}
