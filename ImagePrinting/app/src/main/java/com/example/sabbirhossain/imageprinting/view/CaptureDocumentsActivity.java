package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;
import com.example.sabbirhossain.imageprinting.utility.AppUtils;

import java.io.File;

/**
 * Created by sabbirhossain on 5/16/16.
 */
public class CaptureDocumentsActivity extends Activity {
    RelativeLayout customerPhotoLayout, customerIdLayout, nomineePhotoLayout, nomineeIdLayout;
    Button proceedBtn;
    Handler handler = new Handler(Looper.getMainLooper());
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
    String TAG = "CaptureDocumentsActivity";
    Bitmap customerPhotoBitmap, customerIdBackBitmap, customerIdFrontBitmap, nomineePhotoBitmap, nomineeIdBackBitmap, nomineeIdFrontBitmap;
    byte[] c;

    TextView customerImageTag, customerIdBackTag, customerIdFrontTag, nomineeImageTag, nomineeIdFrontTag, nomineeIdBackTag;


    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onResume() {
        super.onResume();
        AppConstant.customerPhotoClicked = false;
        AppConstant.nomineePhotoClicked = false;
        AppConstant.customerIdFrontClicked = false;
        AppConstant.customerIdBackClicked = false;
        AppConstant.nomineeIdBackClicked = false;
        AppConstant.nomineeIdFrontClicked = false;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_capture_document);
        AppUtils.deleteImageFolder();
        customerIdLayout = (RelativeLayout) findViewById(R.id.customerIdLayout);
        customerPhotoLayout = (RelativeLayout) findViewById(R.id.customerPhotoLayout);
        nomineeIdLayout = (RelativeLayout) findViewById(R.id.nomineeIdLayout);
        nomineePhotoLayout = (RelativeLayout) findViewById(R.id.nomineePhotoLayout);
        proceedBtn = (Button) findViewById(R.id.captureDocumentProceed);

        customerIdBackImg = (ImageView) findViewById(R.id.customerIdBack);
        customerIdFrontImg = (ImageView) findViewById(R.id.customerIdFront);
        customerPhotoImg = (ImageView) findViewById(R.id.customerPhoto);

        nomineeIdbackImg = (ImageView) findViewById(R.id.nomineeIdBack);
        nomineeIdFrontImg = (ImageView) findViewById(R.id.nomineeIdFront);
        nomineephotoImg = (ImageView) findViewById(R.id.nomineePhoto);


        customerImageTag = (TextView) findViewById(R.id.customerPhotoTag);
        nomineeImageTag = (TextView) findViewById(R.id.nomimeePhotoTag);
        customerIdFrontTag = (TextView) findViewById(R.id.customerIdFrontTag);
        customerIdBackTag = (TextView) findViewById(R.id.customerIdBackTag);
        nomineeIdFrontTag = (TextView) findViewById(R.id.nomineeIdFrontTag);
        nomineeIdBackTag = (TextView) findViewById(R.id.nomineeIdBackTag);


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

        proceedBtn.setOnClickListener(new View.OnClickListener() {
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
                AppConstant.customerPhotoClicked = true;
                customerImageTag.setVisibility(View.INVISIBLE);
                Intent cameraIntent = new Intent(getApplicationContext(), CustomerAndNomineeCaptureActivity.class);
                if (ImagePath != null) {
                    cameraIntent.putExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH, ImagePath);
                }

                startActivityForResult(cameraIntent, CUSTOMER_PHOTO);

            }
        });

        nomineephotoImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                AppConstant.nomineePhotoClicked = true;
                nomineeImageTag.setVisibility(View.INVISIBLE);

                Intent cameraIntent = new Intent(getApplicationContext(), CustomerAndNomineeCaptureActivity.class);
                if (ImagePath != null) {
                    cameraIntent.putExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH, ImagePath);
                }
                startActivityForResult(cameraIntent, NOMINEE_PHOTO);
            }
        });


        customerIdFrontImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                customerIdFrontTag.setVisibility(View.INVISIBLE);

                AppConstant.customerIdFrontClicked = true;
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
                AppConstant.customerIdBackClicked = true;
                customerIdBackTag.setVisibility(View.INVISIBLE);

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
                AppConstant.nomineeIdFrontClicked = true;
                nomineeIdFrontTag.setVisibility(View.INVISIBLE);

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
                AppConstant.nomineeIdBackClicked = true;
                nomineeIdBackTag.setVisibility(View.INVISIBLE);

                Intent cameraIntent = new Intent(getApplicationContext(), NIDCaptureActivity.class);


                if (ImagePath != null) {
                    cameraIntent.putExtra(
                            NIDCaptureActivity.IMAGE_PATH,
                            ImagePath);

                }
                startActivityForResult(cameraIntent, NOMINEE_ID_BACK);

            }
        });

    }


    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);


        if (requestCode == CUSTOMER_PHOTO) {
            try {
                if (ImagePath == null) {

                }

                ImagePath = data.getStringExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    customerPhotoImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    customerPhotoBitmap = BitmapFactory.decodeFile(bearerPic.getAbsolutePath());

                    Log.e(TAG, "cusbit" + customerPhotoBitmap.toString());
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }


        } else if (requestCode == NOMINEE_PHOTO) {
            try {
                ImagePath = data.getStringExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {

                    if (nomineePhotoBitmap != null) {
                        nomineePhotoBitmap.recycle();
                        nomineePhotoBitmap = null;
                    }
                    //customerPhotoImg.setVisibility(View.GONE);
                    nomineephotoImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    nomineePhotoBitmap = BitmapFactory.decodeFile(bearerPic.getAbsolutePath());
                    // Log.e(TAG, "nombit" + customerPhotoBitmap.toString());

                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }


        } else if (requestCode == CUSTOMER_ID_FRONT) {
            try {
                ImagePath = data.getStringExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    customerIdFrontImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    customerIdFrontBitmap = BitmapFactory.decodeFile(bearerPic.getAbsolutePath());
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        } else if (requestCode == CUSTOMER_ID_BACK) {
            try {
                ImagePath = data.getStringExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    customerIdBackImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    customerIdBackBitmap = BitmapFactory.decodeFile(bearerPic.getAbsolutePath());
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        } else if (requestCode == NOMINEE_ID_FRONT) {
            try {
                ImagePath = data.getStringExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);
                    nomineeIdFrontImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    customerIdFrontBitmap = BitmapFactory.decodeFile(bearerPic.getAbsolutePath());
                    String imageHexString = AppUtils.bytesToHexString(AppUtils.convertFileToByte(ImagePath));
                    photoContent = imageHexString;
                }
            } catch (Exception e) {
                // TODO: handle exception
                e.printStackTrace();
            }

        } else if (requestCode == NOMINEE_ID_BACK) {
            try {
                ImagePath = data.getStringExtra(CustomerAndNomineeCaptureActivity.IMAGE_PATH);
                File bearerPic = new File(ImagePath);

                if (bearerPic.exists()) {
                    //customerPhotoImg.setVisibility(View.GONE);


                    nomineeIdbackImg.setImageBitmap(BitmapFactory.decodeFile(bearerPic.getAbsolutePath()));
                    nomineeIdBackBitmap = BitmapFactory.decodeFile(bearerPic.getAbsolutePath());
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

