package com.app.backend.admin.visit.model;

public enum AdminVisitStatus {
    NEW("new"),
    FINISHED("finished");

    private String value;

    AdminVisitStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
