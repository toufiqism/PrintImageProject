package com.example.sabbirhossain.imageprinting;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.RelativeLayout;

import com.example.sabbirhossain.imageprinting.utility.AppConstant;

/**
 * Created by sabbirhossain on 5/16/16.
 */
public class CaptureDocumentsActivity extends Activity {
    RelativeLayout customerPhotoLayout, customerIdLayout, nomineePhotoLayout, nomineeIdLayout;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_capture_document);
        customerIdLayout = (RelativeLayout) findViewById(R.id.customerIdLayout);
        customerPhotoLayout = (RelativeLayout) findViewById(R.id.customerPhotoLayout);
        nomineeIdLayout = (RelativeLayout) findViewById(R.id.nomineeIdLayout);
        nomineePhotoLayout = (RelativeLayout) findViewById(R.id.nomineePhotoLayout);
        if (AppConstant.customerPhoto == true) {
            customerPhotoLayout.setVisibility(View.VISIBLE);

        }
        if (AppConstant.customerId == true) {
            customerIdLayout.setVisibility(View.VISIBLE);

        }
        if (AppConstant.nomineePhoto == true) {
            nomineePhotoLayout.setVisibility(View.VISIBLE);

        }
        if (AppConstant.nomineeId == true) {
            nomineeIdLayout.setVisibility(View.VISIBLE);

        }


    }
}
