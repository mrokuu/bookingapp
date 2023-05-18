package com.app.backend.visit.mapper;

import com.app.backend.visit.model.Visit;

import java.time.format.DateTimeFormatter;

public class EmailMapper {



    public static String createEmailMessage(Visit visit){
        return "Your visit at id: " + visit.getId() +
                "\nDate: " + visit.getPlaceDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")) +
                "\nValue: " + visit.getGrossValue() + " PLN " +
                "\n\n" +
                "\nPayment: " + visit.getPayment().getName() +
                (visit.getPayment().getNote() != null ? "\n" + visit.getPayment().getNote() : "");
    }

}
