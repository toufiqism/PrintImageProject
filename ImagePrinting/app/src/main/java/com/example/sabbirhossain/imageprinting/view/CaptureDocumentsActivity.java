package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RelativeLayout;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;

/**
 * Created by sabbirhossain on 5/16/16.
 */
public class CaptureDocumentsActivity extends Activity {
    RelativeLayout customerPhotoLayout, customerIdLayout, nomineePhotoLayout, nomineeIdLayout;
    Button proceesBtn;

    ImageView customerPhotoImg;
    ImageView customerIdFrontImg;
    ImageView customerIdBackImg;
    ImageView nomineeIdbackImg;
    ImageView nomineeIdFrontImg;
    ImageView nomineephotoImg;
    private static final int CUSTOMER_PHOTO = 1;
    private static final int CUSTOMER_ID_FRONT = 2;
    private static final int CUSTOMER_ID_BACK = 3;
    private static final int NOMINEE_ID_FRONT = 4;
    private static final int NOMINEE_ID_BACK = 5;
    private static final int NOMINEE_PHOTO = 6;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_capture_document);
        customerIdLayout = (RelativeLayout) findViewById(R.id.customerIdLayout);
        customerPhotoLayout = (RelativeLayout) findViewById(R.id.customerPhotoLayout);
        nomineeIdLayout = (RelativeLayout) findViewById(R.id.nomineeIdLayout);
        nomineePhotoLayout = (RelativeLayout) findViewById(R.id.nomineePhotoLayout);
        proceesBtn = (Button) findViewById(R.id.captureDocumentProceed);

        customerIdBackImg = (ImageView) findViewById(R.id.customerIdBack);
        customerIdFrontImg = (ImageView) findViewById(R.id.customerIdFront);
        customerPhotoImg = (ImageView) findViewById(R.id.customerPhoto);

        nomineeIdbackImg = (ImageView) findViewById(R.id.nomineeIdBack);
        nomineeIdFrontImg = (ImageView) findViewById(R.id.nomineeIdFront);
        nomineephotoImg = (ImageView) findViewById(R.id.nomineePhoto);


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
        takePhoto();

        proceesBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(CaptureDocumentsActivity.this, PhotoPreviewActivity.class);
                startActivity(intent);

            }
        });

    }

    private void takePhoto() {
        customerPhotoImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /*Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cameraIntent, CUSTOMER_PHOTO);*/
                Intent intent=new Intent(getApplicationContext(),IdCardCameraActivity.class);
                startActivity(intent);



            }
        });

        customerIdFrontImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cameraIntent, CUSTOMER_ID_FRONT);
            }
        });
        customerIdBackImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cameraIntent, CUSTOMER_ID_BACK);
            }
        });
        nomineeIdFrontImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cameraIntent, NOMINEE_ID_FRONT);
            }
        });
        nomineeIdbackImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cameraIntent, NOMINEE_ID_BACK);
            }
        });
        nomineephotoImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(cameraIntent, NOMINEE_PHOTO);
            }
        });
    }

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == CUSTOMER_PHOTO && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
            customerPhotoImg.setImageBitmap(photo);
        } else if (requestCode == CUSTOMER_ID_FRONT && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
           // Bitmap corpedBitmap = Bitmap.createBitmap(photo, 42, 42, photo.getWidth() - 42, photo.getHeight() - 42);
            customerIdFrontImg.setImageBitmap(photo);
        } else if (requestCode == CUSTOMER_ID_BACK && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
            customerIdBackImg.setImageBitmap(photo);
        } else if (requestCode == NOMINEE_PHOTO && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
            nomineephotoImg.setImageBitmap(photo);
        } else if (requestCode == NOMINEE_ID_FRONT && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
            nomineeIdFrontImg.setImageBitmap(photo);
        } else if (requestCode == NOMINEE_ID_BACK && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
            nomineeIdbackImg.setImageBitmap(photo);
        }


    }


}
