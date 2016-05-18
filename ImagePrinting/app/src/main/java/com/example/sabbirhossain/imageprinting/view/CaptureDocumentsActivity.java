package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RelativeLayout;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;
import com.example.sabbirhossain.imageprinting.utility.AppUtils;

import java.io.File;

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
    private static final int CUSTOMER_PHOTO = 111;
    private static final int CUSTOMER_ID_FRONT = 112;
    private static final int CUSTOMER_ID_BACK = 113;
    private static final int NOMINEE_ID_FRONT = 114;
    private static final int NOMINEE_ID_BACK = 115;
    private static final int NOMINEE_PHOTO = 116;
    String ImagePath;
    String photoContent;

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
                Intent cameraIntent = new Intent(getApplicationContext(), CustomerCaptureActivity.class);
                if (ImagePath != null) {
                    cameraIntent.putExtra(CustomerCaptureActivity.IMAGE_PATH, ImagePath);
                }

                startActivityForResult(cameraIntent, CUSTOMER_PHOTO);

            }
        });

        customerIdFrontImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(getApplicationContext(), NIDCaptureActivity.class);


                if (ImagePath != null) {
                    cameraIntent.putExtra(
                            NIDCaptureActivity.IMAGE_PATH,
                            ImagePath);

                }
                startActivityForResult(cameraIntent, CUSTOMER_ID_FRONT);


            }
        });
        customerIdBackImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(getApplicationContext(), NIDCaptureActivity.class);


                if (ImagePath != null) {
                    cameraIntent.putExtra(
                            NIDCaptureActivity.IMAGE_PATH,
                            ImagePath);

                }
                startActivityForResult(cameraIntent, CUSTOMER_ID_BACK);

            }
        });
        nomineeIdFrontImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(getApplicationContext(), NIDCaptureActivity.class);


                if (ImagePath != null) {
                    cameraIntent.putExtra(
                            NIDCaptureActivity.IMAGE_PATH,
                            ImagePath);

                }
                startActivityForResult(cameraIntent, NOMINEE_ID_FRONT);

            }
        });
        nomineeIdbackImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(getApplicationContext(), NIDCaptureActivity.class);


                if (ImagePath != null) {
                    cameraIntent.putExtra(
                            NIDCaptureActivity.IMAGE_PATH,
                            ImagePath);

                }
                startActivityForResult(cameraIntent, NOMINEE_ID_BACK);

            }
        });
        nomineephotoImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cameraIntent = new Intent(getApplicationContext(), CustomerCaptureActivity.class);
                if (ImagePath != null) {
                    cameraIntent.putExtra(CustomerCaptureActivity.IMAGE_PATH, ImagePath);
                }
                startActivityForResult(cameraIntent, NOMINEE_PHOTO);
            }
        });
    }


    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == CUSTOMER_PHOTO) {
            try {
                ImagePath = data.getStringExtra(CustomerCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    customerPhotoImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }


        } else if (requestCode == NOMINEE_PHOTO) {
            try {
                ImagePath = data.getStringExtra(CustomerCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    nomineephotoImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }


        } else if (requestCode == CUSTOMER_ID_FRONT) {
            try {
                ImagePath = data.getStringExtra(CustomerCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    customerIdFrontImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        } else if (requestCode == CUSTOMER_ID_BACK) {
            try {
                ImagePath = data.getStringExtra(CustomerCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    customerIdBackImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        } else if (requestCode == NOMINEE_ID_FRONT) {
            try {
                ImagePath = data.getStringExtra(CustomerCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    nomineeIdFrontImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        } else if (requestCode == NOMINEE_ID_BACK) {
            try {
                ImagePath = data.getStringExtra(CustomerCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    nomineeIdbackImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        }

    }

}

