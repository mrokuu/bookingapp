//package com.app.backend.common.mail;
//
//import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.mail.javamail.JavaMailSender;
//
//public class EmailConfig {
//
//    @Bean
//    @ConditionalOnProperty(name="app.email.sender", matchIfMissing = true, havingValue = "emailSimpleService")
//    public EmailSender emailSimpleService(JavaMailSender javaMailSender){
//        return new EmailService(javaMailSender);
//    }
//
//    @Bean
//    @ConditionalOnProperty(name="app.email.sender", havingValue = "fakeEmailService")
//    public EmailSender fakeEmailService(){
//        return new FakeEmailService();
//    }
//}
