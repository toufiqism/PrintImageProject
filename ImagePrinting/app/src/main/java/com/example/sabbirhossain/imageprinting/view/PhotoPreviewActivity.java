package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.sabbirhossain.imageprinting.R;

/**
 * Created by sabbirhossain on 5/17/16.
 */
public class PhotoPreviewActivity extends Activity {
    Button printPhotoBtn;
    Button printIdBtn;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_photo_preview);

        printPhotoBtn= (Button) findViewById(R.id.printPhoto);
        printIdBtn= (Button) findViewById(R.id.printId);

        printPhotoBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });


        printIdBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                
            }
        });



    }
}
