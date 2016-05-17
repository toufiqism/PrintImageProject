package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;

/**
 * Created by sabbirhossain on 5/16/16.
 */
public class CaptureDocumentsActivity extends Activity {
    RelativeLayout customerPhotoLayout, customerIdLayout, nomineePhotoLayout, nomineeIdLayout;
    Button proceesBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_capture_document);
        customerIdLayout = (RelativeLayout) findViewById(R.id.customerIdLayout);
        customerPhotoLayout = (RelativeLayout) findViewById(R.id.customerPhotoLayout);
        nomineeIdLayout = (RelativeLayout) findViewById(R.id.nomineeIdLayout);
        nomineePhotoLayout = (RelativeLayout) findViewById(R.id.nomineePhotoLayout);
        proceesBtn= (Button) findViewById(R.id.captureDocumentProceed);


        if (AppConstant.customerPhotoFlag == true) {
            customerPhotoLayout.setVisibility(View.VISIBLE);

        }
        if (AppConstant.customerIdFlag == true) {
            customerIdLayout.setVisibility(View.VISIBLE);

        }
        if (AppConstant.nomineePhotoFlag == true) {
            nomineePhotoLayout.setVisibility(View.VISIBLE);

        }
        if (AppConstant.nomineeIdFlag == true) {
            nomineeIdLayout.setVisibility(View.VISIBLE);

        }


      proceesBtn.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              Intent intent=new Intent(CaptureDocumentsActivity.this,PhotoPreviewActivity.class);
              startActivity(intent);

          }
      });






    }
}
