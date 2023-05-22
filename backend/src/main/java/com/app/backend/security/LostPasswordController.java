//package com.app.backend.security;
//
//import com.app.backend.security.model.dto.ChangePassword;
//import com.app.backend.security.model.dto.EmailObject;
//import com.app.backend.security.service.LostPasswordService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//
//@RestController
//@RequiredArgsConstructor
//public class LostPasswordController {
//
//    private final LostPasswordService lostPasswordService;
//
//    @PostMapping("/lostPassword")
//    public void lostPassword(@RequestBody EmailObject emailObject) {
//        lostPasswordService.sendLostPasswordLink(emailObject);
//    }
//
//    @PostMapping("/changePassword")
//    public void changePassword(@RequestBody ChangePassword changePassword) {
//        lostPasswordService.changePassword(changePassword);
//    }
//
//}
